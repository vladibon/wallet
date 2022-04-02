function HomeTabItem(props) {
    const { date, type, category, comment, sum, balance } = props;
    return (
        <>
            <th>{date}</th>
            <th>{type}</th>
            <th>{category}</th>
            <th>{comment}</th>
            <th>{sum}</th>
            <th>{balance}</th>
        </>
    );
}

export default HomeTabItem;