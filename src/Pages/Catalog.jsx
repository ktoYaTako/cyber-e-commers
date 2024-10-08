import React from 'react'
import useProducts from '../components/hooks/useProduct';
import ProductCard from '../components/UI/Product Card/ProductCard';

const Catalog = () => {
  
  const { products, toggleLike } = useProducts();


  return (
    <section className="catalog">
      <div className="container-fluid">
        <div className="box_1">
          <div className="breadcrumbs">

          </div>
          <div className="catalog_box row">
            <div className="filters col-md-3">
              <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Brand
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <strong></strong> 
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Battery capacity
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <strong></strong> 
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Screen type
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <strong></strong> 
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Screen diagonal
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <strong></strong> 
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Protection class
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <strong></strong> 
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Built-in memory
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <strong></strong> 
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="products_content col-md-9">
              <div className="card_content">
                <div className="top_part">

                </div>
                  <div className="product_card row">
                    {products.map(product =>
                    <div className="col-12 col-sm-6 col-md-4 col-xl-4 px-0" key={product.id}>
                      <ProductCard 
                      product={product} 
                      onLikeClick={() => toggleLike(product.id)} 
                    />
                  </div>
                  )}
                </div>
              </div>
              <div className="pagination">

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Catalog