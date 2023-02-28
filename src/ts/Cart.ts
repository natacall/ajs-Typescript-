import Bayable from "./Bayable";

export default class Cart {
  private items: Bayable[] = [];

  protected getItemIndexById(id: number): number {
    return this.items.findIndex((item) => item.id === id);
  }

  add(item: Bayable): void {
    if (this.getItemIndexById(item.id) === -1) {
      this.items.push(item);
    }
  }

  getAll(): Bayable[] {
    return this.items;
  }

  sum(): number {
    return this.items.reduce((acc, item) => acc + Number(item.price), 0);
  }

  discount(percent: number): number {
    return this.sum() * percent / 100;
  }

  total(discountValue: number): number {
    return this.sum() - this.discount(discountValue);
  }

  delete(id: number): boolean {
    const index = this.getItemIndexById(id);
    if (index !== -1) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }
}