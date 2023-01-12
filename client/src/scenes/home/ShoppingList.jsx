import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Box, Typography, Tab, Tabs, useMediaQuery} from '@mui/material'
import Item from '../../components/Item'
import { setItems } from '../../state'
import { useState } from 'react'
import { useEffect } from 'react'


const ShoppingList = () => {
    const dispatch = useDispatch();
    const [value,setValue] = useState("all")
    const items = useSelector((state) => state.cart.items)
    const isNonMobile = useMediaQuery("(min-width:600px)")
    console.log("items", items);

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    async function getItems() {
        const items = await fetch(
            "http://localhost:1337/api/items?populate=image",
            { method: "GET" }
        );
        const itemsJson = await items.json();
        dispatch(setItems(itemsJson.data))
    }

    useEffect(() =>{
        getItems()
    }, [])

    const topRatedItems = items.filter(
        (item) => item.attributes.category === "topRated"
    )
    const newArrivalsItems = items.filter(
        (item) => item.attributes.category === "newArrivals"
    )
    const bestSellersItems = items.filter(
        (item) => item.attributes.category === "bestSellers"
    )
    

    return (
        <Box
        width="80%"
        margin="80px auto"
        >
            <Typography
            variant="h3"
            textAlign="center"
            >
                Our featured <b>Products</b>
            </Typography>
        </Box>
    )
}

    

export default ShoppingList