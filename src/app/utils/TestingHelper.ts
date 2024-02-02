import { ComponentFixture } from '@angular/core/testing'
import { NumberSymbol, getLocaleNumberSymbol } from '@angular/common'

export class TestingHelper<T> {

  private constructor(
    private fixture: ComponentFixture<T>
  ) {}

  static createHelper<T>(fixture: ComponentFixture<T>) {
    const testingHelper = new TestingHelper(fixture)

    return testingHelper
  }

  getByTestId(testId: string): Node {
    const resultHtml = this.fixture.debugElement.nativeElement
    return resultHtml.querySelector(`[data-testid="${testId}"]`)
  }

  getAllByTestId(testId: string): NodeList {
    const resultHtml = this.fixture.debugElement.nativeElement
    return resultHtml.querySelectorAll(`[data-testid="${testId}"]`)
  }
}