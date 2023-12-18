import ItemList from './ItemList';

const RestaurantCategory = ({ showItems, showIndex, ...props }) => {

    const handleHideAndShow = () => {
        showIndex();
    }

    return (
        <div className="menu-recommended">
            <div className="menu-items" onClick={handleHideAndShow}>
                <span>{props?.title} ({props.itemCards?.length})</span>
                <span>{showItems ? "🔽" : "🔼"}</span>
            </div>
            {showItems && <ItemList items={props.itemCards} />}
        </div>
    )
}

export default RestaurantCategory;
