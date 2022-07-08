# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
Book.create( list_id: 3, title: "Pat the Bunny", author: "Dorothy Kunhardt", description: lorem)
Book.create( list_id: 3, title:"Introducing Sai the Peacock: The Unique Beak", author: "Estani Frizzell", description: lorem)
Book.create( list_id: 3, title: "100 Devotions for Kids Dealing with Anxiety", author: "Justine Brooks Froelker", description: lorem)
Book.create( list_id: 3, title: "Goodnight Moon", author: "Margaret Wise Brown", description: lorem)
