import testNapi from "libentry.so"

@Entry
@Component
struct Index {
  @State message: string = 'Hello World'

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
          .onClick(() => {
            console.log("Test NAPI 2 + 3 = " + testNapi.add(2, 3));
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}
