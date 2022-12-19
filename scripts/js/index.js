import data from "./data.js";


// Appending Cards to featured sections
const featuredProductSection = document.querySelector('#featured-products');
let finalHTMLString = "";
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
                    <!--  <span class="badge bg-secondary">${item.category}</span> -->
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
    finalHTMLString = finalHTMLString + CardComponent;
})

featuredProductSection.innerHTML = finalHTMLString; 



