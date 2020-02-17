class Artist < ApplicationRecord
  has_many :records, dependen: :distroy

  validates :name, presence: true
end
