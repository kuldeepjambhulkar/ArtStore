import data from "./data.js";

const index = localStorage.getItem("clickedProductIndex"); 
const clickedProduct = data.find(item => item.id === Number(index));

const productSection = document.querySelector('#productSection');
let finalHTMLString = "";

const ProductComponent = 
`
<div class="container mt-5 pt-5 pb-5 mb-5" id="card">
<div class="card">
<div class="row g-0">
    <div class="col-md-6 border-end">
    <div class="d-flex flex-column justify-content-center">
        <div class="main_image">
        <img
            src="${clickedProduct.imagePath}"
            id="main_product_image"
            width="350"
        />
        </div>
        <div class="thumbnail_images">
        <ul id="thumbnail">
            <li>
            <img
                onclick="changeImage(this)"
                src="${clickedProduct.relatedImages[0]}"
                width="70"
            />
            </li>
            <li>
            <img
                onclick="changeImage(this)"
                src="${clickedProduct.relatedImages[1]}"
                width="70"
            />
            </li>
            <li>
            <img
                onclick="changeImage(this)"
                src="${clickedProduct.relatedImages[2]}"
                width="70"
            />
        </ul>
        </div>
    </div>
    </div>
    <div class="col-md-6">
    <div class="p-3 right-side">
        <div
        class="d-flex justify-content-between align-items-center mt-4"
        >
        <h3>${clickedProduct.painting_name}</h3>
        </div>
        <div class="mt-2 pr-3 content">
        <p>
            ${clickedProduct.longDescription}
        </p>
        </div>
        <div>
        <div class="d-flex justify-content-between">
            <span>Content</span><span>${clickedProduct.content}</span>
        </div>
        <div class="d-flex justify-content-between">
            <span>Size</span><span>${clickedProduct.size}</span>
        </div>
        </div>
        <br>

        <h3>₹${clickedProduct.price}</h3>
        
        <div class="buttons d-flex flex-row mt-5 gap-3">
        <button class="btn btn-dark">Buy Now</button>
        <button class="btn btn-outline-dark">Add to Basket</button>
        </div>
    </div>
    </div>
</div>
</div>
</div>
`
finalHTMLString =  finalHTMLString + ProductComponent;
productSection.innerHTML = finalHTMLString;



// Appending Cards to featured sections
const similarProductsSection = document.querySelector('#similarProductsSection');
let finalHTMLStringForSimilarProducts = "";
data.forEach(item => {

    const CardComponent = 
    `
        <div class="col-lg-5 col-md-12">
        <section class="mt-4" style="background-color: #eee;">
            <div class="">
                <div class="card text-black">
                <img src="${item.imagePath}"
                    class="card-img-top" alt="${item.painting_name}" />
                <div class="card-body">
                    <div>
                    <!-- <span class="badge bg-secondary">${item.category}</span> -->
                    <h5 class="card-title mt-3">${item.painting_name}</h5>
                    <!-- <p class="text-muted mb-4">${item.description}</p> -->
                    </div>
                    <!-- 
                    <div>
                    <div class="d-flex justify-content-between">
                        <span>Content</span><span>${item.content}</span>
                    </div>
                    <div class="d-flex justify-content-between">
                        <span>Dimensions</span><span>${item.dimensions}</span>
                    </div>
                    </div>
                    -->
                    <div class="d-flex justify-content-between align-items-center total font-weight-bold mt-4">
                        <span>
                            <span><button type="button" class="btn btn-dark btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModalLong" onclick="launchProductModal(${item.id})"> View Product</button></span>
                            <span><button type="button" class="btn btn-outline-dark btn-sm"> Add to Cart</button></span>
                        </span>
                        <h4>₹ ${item.price}</h4>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </div>
    `
    finalHTMLStringForSimilarProducts = finalHTMLStringForSimilarProducts + CardComponent;
})

similarProductsSection.innerHTML = finalHTMLStringForSimilarProducts;