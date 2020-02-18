# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
9.times do |i|
    Artist.create(
      name: "Donations #{i + 1}",
      image: "https://f0.pngfuel.com/png/893/771/blue-donate-text-overlay-png-clip-art.png"
    )
  end