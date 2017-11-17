import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { connect } from 'react-redux'
import { success } from 'react-notification-system-redux'
import {
  Card,
  Button,
  Modal,
  Input
} from 'react-materialize'

import { colors, grid, fonts, viewports } from '../styles/settings/settings'

import {
  addProduct,
  removeProduct
} from '../actions/ProductActions'

const mapStateToProps = (state) => {
  const { products } = state.productReducer
  return {
    products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product) => {
      dispatch(addProduct(product))
      dispatch(success({
        message: "Product successfully added to your list",
        position: "tc",
        autoDismiss: 4
      }))
    },
    removeProduct: (id) => {
      dispatch(removeProduct(id))
      dispatch(success({
        message: "Product successfully removed from your list",
        position: "tc",
        autoDismiss: 4
      }))
    }
  }
}

class CreateList extends Component {
  constructor(props) {
    super(props)

    this.addProduct = this.addProduct.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      name: '',
      amount: 0,
      pricePerUnit: 0
    }
  }

  addProduct(e) {
    e.preventDefault()
    const name = e.target.name.value
        , amount = Number(e.target.amount.value)
        , pricePerUnit = Number(e.target.pricePerUnit.value)
        , product = {
            name,
            amount,
            pricePerUnit,
            totalPrice: amount * pricePerUnit
          }

    this.props.addProduct(product)
    this.resetAndCloseForm(e.target)
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  resetAndCloseForm(form) {
    this.setState({
      name: '',
      amount: 0,
      pricePerUnit: 0
    })
  }

  _modalBody() {
    return(
      <form onSubmit={this.addProduct} ref={(el) => this.form = el}>
        <Input name="name" label="Name" required value={this.state.name}
          onChange={this.handleChange}/>
        <Input name="amount" type="number" label="Amount" required value={this.state.amount}
          onChange={this.handleChange}/>
        <Input name="pricePerUnit" type="number" label="Price per unit" step="0.01" min="0" required value={this.state.pricePerUnit}
          onChange={this.handleChange}/>
        <Button>
          Add Product
        </Button>
      </form>
    )
  }

  render() {
    const { products } = this.props
    return(
      <div className={css(styles.container)}>
        <h2 className={css(styles.title)}>Add Products to your list</h2>
        <ul className={css(styles.productsList)}>
          {Object.keys(products).map((id) => (
            <li className={css(styles.productsListItem)} key={id}>
              <ProductCard {...products[id]} removeProduct={() => this.props.removeProduct(id)}/>
            </li>
          ))}
          <li className={css(styles.productsListItem)}>
            <Card className={css(styles.addProductCard)} title="Add product" actions={
              [<Modal header="Add product"
                  key="add-product-modal"
                  trigger={<Button floating icon="add" waves="light" className={css(styles.addButton)} />}>
                {this._modalBody()}
              </Modal>]
            }>
              <small className={css(styles.productDetail)}>Amount: 0</small>
              <small className={css(styles.productDetail)}>Price per unit: $0.00</small>
              <small className={css(styles.productDetail)}>Total price: $0.00</small>
            </Card>
          </li>
        </ul>
      </div>
    )
  }
}

const ProductCard = ({ id, name, amount, pricePerUnit, totalPrice, removeProduct}) => (
  <Card title={name} actions={[<Button key={`remove_${id}`} floating icon="remove" waves="light" className={css(styles.addButton)} onClick={removeProduct}/>]}>
    <small className={css(styles.productDetail)}>Amount: {amount}</small>
    <small className={css(styles.productDetail)}>Price per unit: ${pricePerUnit.toFixed(2)}</small>
    <small className={css(styles.productDetail)}>Total price: ${totalPrice.toFixed(2)}</small>
  </Card>
)

const styles = StyleSheet.create({
  container: {
    margin: '0 auto',
    paddingTop: grid.gutter.base,
    width: '90%'
  },
  title: {
    fontSize: fonts.sizes.title,
    fontWeight: fonts.weight.bold,
    marginBottom: grid.gutter.sized(0.5),
    textAlign: 'center'
  },
  productsList: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    [viewports.mobile]: {
      flexFlow: 'column wrap'
    }
  },
  productsListItem: {
    flex: '1 1 auto',
    marginBottom: grid.gutter.base,
    marginRight: grid.gutter.sized(0.5),
    minWidth: '22.5%',
    ':nth-child(4n)': {
      marginRight: 0
    },
    [viewports.mobile]: {
      width: '100%',
      marginBottom: grid.gutter.base,
      marginRight: 0,
    }
  },
  addProductCard: {
    border: `1px dashed ${colors.primaryDark}`,
    width: '100%'
  },
  productDetail: {
    display: 'block'
  },
  addButton: {
    color: colors.primaryDark
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateList)
