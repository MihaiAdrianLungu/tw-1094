function Order(props) {
    const {order} = props;

    return (
        <div>
            <div>{order.title}</div>
        </div>
    )
}

export default Order;