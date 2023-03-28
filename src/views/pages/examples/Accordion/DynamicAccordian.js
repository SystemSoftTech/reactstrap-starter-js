import AppAccordion from "@components/Accordions"

const options = {
  list: [
    {
      header: "Collapse Item 1",
      body: `<p>Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping
          powder candy. Sugar plum brownie brownie <strong>cotton candy</strong>. Tootsie roll cotton
          candy pudding bonbon chocolate cake lemon drops candy. Jelly marshmallow
          chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple
          pie pudding jelly beans pie candy canes candy canes jelly-o. Tiramisu
          brownie gummi bears soufflé dessert cake.</p>`
    },
    {
      header: "Collapse Item 2",
      body: `Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping
          powder candy. Sugar plum brownie brownie cotton candy. Tootsie roll cotton
          candy pudding bonbon chocolate cake lemon drops candy. Jelly marshmallow
          chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple
          pie pudding jelly beans pie candy canes candy canes jelly-o. Tiramisu
          brownie gummi bears soufflé dessert cake.`
    },
    {
      header: "Collapse Item 3",
      body: `Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping
          powder candy. Sugar plum brownie brownie cotton candy. Tootsie roll cotton
          candy pudding bonbon chocolate cake lemon drops candy. Jelly marshmallow
          chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple
          pie pudding jelly beans pie candy canes candy canes jelly-o. Tiramisu
          brownie gummi bears soufflé dessert cake.`,
      disabled: true
    }
  ],
  closeOther: false,
  firstOpen: true
}

const AccordionExample = () => {
  return (
    <>
      <AppAccordion list={options.list} firstOpen={options.firstOpen} />
    </>
  )
}

export default AccordionExample
