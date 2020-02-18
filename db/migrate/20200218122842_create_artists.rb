class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.string :name, null: false
      t.string :image, default: 'https://f0.pngfuel.com/png/893/771/blue-donate-text-overlay-png-clip-art.png'

      t.timestamps
    end
  end
end
