import { makeAutoObservable } from 'mobx';

class PostStore {
  constructor() {
    makeAutoObservable(this);
  }

  private pageNationStartIndex = 0;
  private pageNationEndIndex = 10;
  private pageNationViewCount = 10;
  
  public get startIndex(): number {
    return this.pageNationStartIndex;
  }

  public get endIndex(): number {
    return this.pageNationEndIndex;
  }

  public get viewCount(): number {
    return this.pageNationViewCount;
  }

  onClickPrev() {
    if (this.pageNationStartIndex <= 0) {
      return;
    }
    this.pageNationStartIndex -= this.pageNationViewCount;
    this.pageNationEndIndex -= this.pageNationViewCount;
  }

  onClickNext(list: any[]) {
    if (list.length <= this.pageNationEndIndex) {
      return;
    }
    this.pageNationStartIndex += this.pageNationViewCount;
    this.pageNationEndIndex += this.pageNationViewCount;
  }
}

export default new PostStore();