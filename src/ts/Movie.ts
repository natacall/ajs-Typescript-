import Bayable from "./Bayable";

export default class Movie implements Bayable {
  constructor(
    readonly id: number,
    readonly titleOriginal: string,
    readonly titleRu: string,
    readonly price: string,
    readonly year: number,
    readonly country: string,
    readonly genres: string[],
    readonly runtime: number,
    readonly img: string) { }
}