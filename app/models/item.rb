class Item < ActiveRecord::Base
  belongs_to :user
  # mount_uploader :image, ImageUploader
  has_attached_file :image, :path => ":rails_root/public/images/:filename"
  # has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, 
  #                   url: "/assets/products/:id/:style/:basename. :extension",
  #                   path: ":rails_root/public/assets/products/:id/:style/:basename. :extension"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
