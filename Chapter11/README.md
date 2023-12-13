            <ul>
                {
                     itemCards?.map((item)=>{
                                return (
                                // console.log(item)
                                <li key={item?.card?.info?.id}>
                                    Name:  {item?.card?.info?.name}   
                                    Rs : {item?.card?.info?.price/100}
                                 </li>
                         )
                 })
                }
            </ul>

<!-- const{id,description,name,imageId,price} = props -->