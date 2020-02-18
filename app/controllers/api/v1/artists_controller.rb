class Api::V1::ArtistsController < ApplicationController
  def index
    artist = Artist.all.order(created_at: :desc)
    render json: artist
  end

  def create
    artist = Artist.create(artist_params)
    if artist
      render json: artist
    else
      render json: artist.errors
    end
  end

  def show
    p artist
    if artist
      render json: artist
    else
      render json: artist.errors
    end
  end

  def destroy
    artist&.destroy
    render json: { message: 'Artist deleted!' }
  end

  private

  def artist_params
    params.permit(:name, :image)
  end

  def artist
    @artist ||= Artist.find(params[:id])
  end

end
