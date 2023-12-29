import InteractionPage from "../PageObjects/InteractionPage";
describe("Task_2", () => {
  const inter = new InteractionPage();
  it("To verify that Boxes are Resizeable or Not", () => {
    inter.pageVisit();
    inter.ClickInteractions();
    inter.verifyPage();
    inter.verifyElements();
    inter.ClickResizeable();
    inter.CheckWidthHeight();
    inter.verifyResizeable1();
    inter.resizeAndVerify2();
  });
});
