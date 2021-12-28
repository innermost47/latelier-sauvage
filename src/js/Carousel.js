/* eslint-disable no-unused-expressions */
export class Carousel {
  constructor(element, options = {}) {
    (this.element = element),
      (this.options = Object.assign(
        {},
        {
          slidesToScroll: 1,
          slidesVisible: 1,
          loop: false,
          navigation: true,
          infinite: false,
        },
        options
      ));
    let children = [].slice.call(element.children);
    this.isMobile = false;
    this.currentItem = 0;
    this.root = this.createDivWithClass("carousel");
    this.root.setAttribute("tabindex", "0");
    this.container = this.createDivWithClass("carousel__container");
    this.root.appendChild(this.container);
    this.element.appendChild(this.root);
    this.moveCallbacks = [];
    this.items = children.map((child) => {
      let item = this.createDivWithClass("carousel__item");
      item.appendChild(child);
      return item;
    });
    if (this.options.infinite) {
      this.offset = this.options.slidesVisible + this.options.slidesToScroll;
      this.items = [
        ...this.items
          .slice(this.items.length - this.offset)
          .map((item) => item.cloneNode(true)),
        ...this.items,
        ...this.items.slice(0, this.offset).map((item) => item.cloneNode(true)),
      ];
      this.goToItem(this.offset, false);
    }
    this.items.forEach((item) => this.container.appendChild(item));
    this.setStyle();
    if (this.options.navigation === true) {
      this.createNavigation();
      this.root.addEventListener("keyup", (e) => {
        if (e.key === "ArrowRight" || e.key === "Right") {
          this.next();
        } else if (e.key === "ArrowLeft" || e.key === "Left") {
          this.prev();
        }
      });
    }
    this.moveCallbacks.forEach((cb) => cb(this.currentItem));
    this.onWindowResize();
    window.addEventListener("resize", this.onWindowResize.bind(this));
    if (this.options.infinite) {
      this.container.addEventListener(
        "transitionend",
        this.resetInfinite.bind(this)
      );
    }
  }

  setStyle() {
    let ratio = this.items.length / this.slidesVisible;
    this.container.style.width = ratio * 100 + "%";
    this.items.forEach(
      (item) => (item.style.width = 100 / this.slidesVisible / ratio + "%")
    );
  }

  createNavigation() {
    let nextButton = this.createDivWithClass("carousel__next");
    let prevButton = this.createDivWithClass("carousel__prev");
    this.root.appendChild(nextButton);
    this.root.appendChild(prevButton);
    nextButton.addEventListener("click", this.next.bind(this));
    prevButton.addEventListener("click", this.prev.bind(this));
    if (this.options.loop === true) {
      return;
    }
    this.onMove((index) => {
      if (index === 0) {
        prevButton.classList.add("carousel__hidden");
      } else {
        prevButton.classList.remove("carousel__hidden");
      }
      if (this.items[this.currentItem + this.slidesVisible] === undefined) {
        nextButton.classList.add("carousel__hidden");
      } else {
        nextButton.classList.remove("carousel__hidden");
      }
    });
  }

  next() {
    this.goToItem(this.currentItem + this.slidesToScroll);
  }

  prev() {
    this.goToItem(this.currentItem - this.slidesToScroll);
  }

  goToItem(index, animation = true) {
    if (index < 0) {
      if (this.options.loop) {
        index = this.items.length - this.slidesVisible;
      } else {
        return;
      }
    } else if (
      index >= this.items.length ||
      (this.items[this.currentItem + this.slidesVisible] === undefined &&
        index > this.currentItem)
    ) {
      if (this.options.loop) {
        index = 0;
      } else {
        return;
      }
    }
    let translateX = (index * -100) / this.items.length;
    if (animation === false) {
      this.container.style.transition = "none";
    }
    this.container.style.transform = "translate3d(" + translateX + "%,0,0)";
    this.container.offsetHeight;
    if (animation === false) {
      this.container.style.transition = "";
    }
    this.currentItem = index;
    this.moveCallbacks.forEach((cb) => cb(index));
  }

  resetInfinite() {
    if (this.currentItem <= this.options.slidesToScroll) {
      this.goToItem(
        this.currentItem + (this.items.length - 2 * this.offset),
        false
      );
    } else if (this.currentItem >= this.items.length - this.offset) {
      this.goToItem(
        this.currentItem - (this.items.length - 2 * this.offset),
        false
      );
    }
  }

  onMove(cb) {
    this.moveCallbacks.push(cb);
  }

  onWindowResize() {
    let mobile = window.innerWidth < 800;
    if (mobile !== this.isMobile) {
      this.isMobile = mobile;
      this.setStyle();
      this.moveCallbacks.forEach((cb) => cb(this.currentItem));
    }
  }

  createDivWithClass(className) {
    let div = document.createElement("div");
    div.setAttribute("class", className);
    return div;
  }

  get slidesToScroll() {
    return this.isMobile ? 1 : this.options.slidesToScroll;
  }

  get slidesVisible() {
    return this.isMobile ? 1 : this.options.slidesVisible;
  }
}
