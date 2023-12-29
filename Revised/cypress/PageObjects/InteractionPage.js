class InteractionPage {
  pageVisit() {
    cy.visit("https://demoqa.com/");
    cy.get(".banner-image").should("exist");
  }
  ClickInteractions() {
    cy.get(":nth-child(5) > :nth-child(1) > .card-body > h5").click();
  }
  verifyPage() {
    cy.get(".main-header").should("have.text", "Interactions");
  }
  verifyElements() {
    cy.get(":nth-child(5) > .element-list > .menu-list > #item-0")
      .should("have.text", "Sortable")
      .should("exist");
    cy.get(":nth-child(5) > .element-list > .menu-list > #item-1")
      .should("have.text", "Selectable")
      .should("exist");
    cy.get(":nth-child(5) > .element-list > .menu-list > #item-2")
      .should("have.text", "Resizable")
      .should("exist");
    cy.get(":nth-child(5) > .element-list > .menu-list > #item-3")
      .should("have.text", "Droppable")
      .should("exist");
    cy.get(":nth-child(5) > .element-list > .menu-list > #item-4")
      .should("have.text", "Dragabble")
      .should("exist");
  }
  ClickResizeable() {
    cy.get(
      ":nth-child(5) > .element-list > .menu-list > #item-2 > .text"
    ).click();
    cy.get(".main-header").should("have.text", "Resizable");
  }
  CheckWidthHeight() {
    cy.get("#resizableBoxWithRestriction").then((box) => {
      cy.wrap(box)
        .invoke("css", "width")
        .then((widthValue) => {
          expect(widthValue).to.equal("200px");
        });
      cy.wrap(box)
        .invoke("css", "height")
        .then((heightValue) => {
          expect(heightValue).to.equal("200px");
        });
    });
  }
  //I have used 2 ways of verifying either boxes are resizeable or not in 1st I just check it through it's Id and behavious
  // while in the seccond one I have checked by changing the value of height and width using trigger()
  verifyResizeable1() {
    const resizableBox = cy.get("#resizable");
    const resizeHandle = resizableBox.find(".react-resizable-handle-se");
    resizeHandle.should("exist");
    resizeHandle.should("be.visible");
  }
  resizeAndVerify2() {
    cy.get("#resizableBoxWithRestriction")
      .find(".react-resizable-handle-se")
      .trigger("mousedown", { which: 1 })
      .trigger("mousemove", { clientX: 499, clientY: 250 })
      .trigger("mouseup", { force: true });
    cy.get("#resizableBoxWithRestriction").then(($box) => {
      const boxWidth = $box.width();
      const boxHeight = $box.height();
      expect(boxHeight).to.be.at.least(150);
      expect(boxWidth).to.be.at.least(150);
      expect(boxWidth).to.be.at.most(500);
      expect(boxHeight).to.be.at.most(300);
    });
  }
}
export default InteractionPage;
