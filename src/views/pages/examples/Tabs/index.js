// ** React Imports
import { Fragment } from "react"

// ** Reactstrap Imports
import { Row, Col } from "reactstrap"

// ** Demo Components
import TabsEnd from "./TabsEnd"
import TabsBasic from "./TabsBasic"
import TabsIcons from "./TabsIcons"
import TabsFilled from "./TabsFilled"
import TabsCentered from "./TabsCentered"
import TabsJustified from "./TabsJustified"
import TabsVerticalLeft from "./TabsVerticalLeft"
import TabsVerticalRight from "./TabsVerticalRight"
import AppCard from "@components/Cards"
import AppTab from "@components/Tabs"

const options = {
  list: [
    {
      header: "Home",
      body: `<p>Pastry gummi bears sweet roll candy canes topping ice cream. Candy
          canes fruitcake cookie carrot cake pastry. Lollipop caramels sesame
          snaps pie tootsie roll macaroon dessert. Muffin jujubes brownie dragée
          ice cream cheesecake icing. Danish brownie pastry cotton candy donut.
          Cheesecake donut candy canes. Jelly beans croissant bonbon cookie
          toffee. Soufflé croissant lemon drops tootsie roll toffee tiramisu.</p>`
    },
    {
      header: "Profile",
      body: `Pudding candy canes sugar plum cookie chocolate cake powder croissant.
          Carrot cake tiramisu danish candy cake muffin croissant tart dessert.
          Tiramisu caramels candy canes chocolate cake sweet roll liquorice
          icing cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon
          drops sweet roll sweet candy. Chocolate sweet chocolate bar candy
          chocolate bar chupa chups gummi bears lemon drops.`
    },
    {
      header: "Disabled",
      body: `Cake croissant lemon drops gummi bears carrot cake biscuit cupcake
          croissant. Macaroon lemon drops muffin jelly sugar plum chocolate
          cupcake danish icing. Soufflé tootsie roll lemon drops sweet roll cake
          icing cookie halvah cupcake.Chupa chups pie jelly pie tootsie roll
          dragée cookie caramels sugar plum. Jelly oat cake wafer pie cupcake
          chupa chups jelly-o gingerbread.`,
      disabled: true
    },
    {
      header: "About",
      body: `Chocolate croissant cupcake croissant jelly donut. Cheesecake toffee
          apple pie chocolate bar biscuit tart croissant. Lemon drops danish
          cookie. Oat cake macaroon icing tart lollipop cookie sweet bear claw.
          Toffee jelly-o pastry cake dessert chocolate bar jelly beans
          fruitcake. Dragée sweet fruitcake dragée biscuit halvah wafer
          gingerbread dessert. Gummies fruitcake brownie gummies tart pudding.`
    }
  ],
  closeOther: false,
  firstOpen: true,
  // type: 'vertical',
  // align: 'fill',
  active: 1
}

const Tabs = () => {
  return (
    <Fragment>
      <Row>
        <Col lg="12">
          <AppCard>
            <AppTab list={options.list} firstOpen={true} align="fill" />
          </AppCard>
        </Col>
        <Col xl="6" lg="12">
          <AppCard title="Basic Tabs">
            <TabsBasic />
          </AppCard>
        </Col>
        <Col xl="6" lg="12">
          <AppCard title="Tabs with icons">
            <TabsIcons />
          </AppCard>
        </Col>
      </Row>
      <Row>
        <Col xl="6" lg="12">
          <AppCard title="Vertical Left Tabs">
            <TabsVerticalLeft />
          </AppCard>
        </Col>
        <Col xl="6" lg="12">
          <AppCard title="Vertical Right Tabs">
            <TabsVerticalRight />
          </AppCard>
        </Col>
      </Row>
      <Row>
        <Col xl="6" lg="12">
          <AppCard title="Filled">
            <TabsFilled />
          </AppCard>
        </Col>
        <Col xl="6" lg="12">
          <AppCard title="Justified">
            <TabsJustified />
          </AppCard>
        </Col>
        <Col xl="6" lg="12">
          <AppCard title="Centered">
            <TabsCentered />
          </AppCard>
        </Col>
        <Col xl="6" lg="12">
          <AppCard title="End">
            <TabsEnd />
          </AppCard>
        </Col>
      </Row>
    </Fragment>
  )
}
export default Tabs
