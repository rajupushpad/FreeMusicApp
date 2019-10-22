class AddUserIdAndRemoveLikesAndUnlikesFromPosts < ActiveRecord::Migration[5.2]
  def change
  	remove_column :posts, :likes
  	remove_column :posts, :unlikes
  	remove_column :posts, :post_by
  	add_column :posts, :user_id,:integer
  end
end
