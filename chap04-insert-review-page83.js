db.reviews.insert(
{
    _id: ObjectId("4c4b1476238d3b4dd5000041"),
    product_id: ObjectId("4c4b1476238d3b4dd5003981"),
    date: new Date(2018, 5, 7),
    title: "Amazing!",
    text: "Has a squeaky wheel, but still a darn good wheelbarrow!",
    rating: 4,
    user_id: ObjectId("4c4b1476238d3b4dd5000042"),
    username: "dgreenthumb",
    helpful_votes: 3,
    voter_ids: [
        ObjectId("4c4b1476238d3b4dd5000033"),
        ObjectId("4c4b1476238d3b4dd5000003"),
        ObjectId("4c4b1476238d3b4dd5000032")
    ]
})