from flask import Flask, request, render_template, redirect, url_for, jsonify
import flask
from models import *
from sqlalchemy import select
from flask_cors import CORS


app = flask.Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:postgres@localhost:5432/mystore"
CORS(app)

db.init_app(app)

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/categories/create", methods=["POST"])
def category_create():
    data = request.json  # Assumes JSON data is sent in the request body
    if not data or 'name' not in data:
        return jsonify({"error": "Category name is required"}), 400
    
    category_name = data['name']
    category = Category(name=category_name)
    db.session.add(category)
    db.session.commit()
    return jsonify({"message": "Category created successfully"}), 201


@app.route("/products/create", methods=["POST"])
def product_create():
    data = request.get_json()     
    product_name = data.get("name")
    product_price = data.get("price")
    category_name = data.get('category')
    image_url = data.get('image')

    if not product_name or not product_price or not category_name or not image_url:
        return jsonify({"error": "Product name, price, category and product image are required"}), 400

    category = db.session.query(Category).filter_by(name=category_name).first()   
    
    product = Product(name=product_name, price=product_price, category_id=category.id)
    db.session.add(product)
    db.session.commit()

    
    product_image = Image(image = image_url, product_id  = product.id)
    db.session.add(product_image)
    db.session.commit()
    return jsonify({"message": "Product created successfully"}), 201


@app.route("/products")
def product_list():
    products_select_query = db.select(Image).order_by(Image.id.desc())
    
    products = db.session.execute(products_select_query).scalars()
    detail = []
    for product in products:
      product_details = {"id" : product.product.id,
         "name" : product.product.name,
         "price" : product.product.price,
         "category_name" : product.product.category.name,
         "image" : product.image        
         }
      detail.append(product_details)
    return flask.jsonify(detail)


with app.app_context():
   db.create_all()

if __name__ == "__main__":
  init_db()
  app.run(port=5000)