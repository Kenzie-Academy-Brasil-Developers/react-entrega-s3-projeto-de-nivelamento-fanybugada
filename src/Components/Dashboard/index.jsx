import { useState } from "react";
import Cart from "../Cart";
import "./style.css";

function Dashboard({ goIn }) {
  const [addProduct, setAddProduct] = useState({
    code: 0,
    name: "",
    description: "",
    price: 0,
    discount: 0,
  });

  const [products, setProducts] = useState([
    {
      code: 10,
      name: "Smart TV Led 50 Semp",
      description:
        "SK8300 4K HDR Android Wi-Fi 3 HDMI 2 USB Controle Remoto com atalhos Chromecast Integrado",
      price: 2299.99,
      discount: 190.99,
    },
    {
      code: 11,
      name: "Smartphone Samsung Galaxy A72 128GB",
      description:
        "4G Wi-Fi Tela 6.7 Dual Chip 6GB RAM Câmera Quádrupla + Selfie 32MP - Preto",
      price: 1988.4,
      discount: 87.89,
    },
    {
      code: 12,
      name: "Smartwatch Samsung Galaxy Watch Active",
      description:
        "4O Galaxy Watch Active é o smartwatch ideal para quem tem um estilo de vida ativo e saudável. Ele é leve, confortável e monitora diariamente suas atividades físicas, e os comportamentos de nível de stress e sono",
      price: 678.6,
      discount: 110.19,
    },
  ]);

  return (
    <div
      className="dashboardContainer"
      style={goIn ? { display: "flex" } : { display: "none" }}
    >
      <Cart products={products} />
      <hr />
      <section className="sectionCadastroContainer">
        <h2>Cadastre um novo produto</h2>
        <label for="codigo">Código do Produto:</label>
        <input
          type="text"
          id="codigo"
          placeholder="Digite o número do código do produto"
          onChange={(evt) =>
            setAddProduct({
              code: evt.target.value,
              name: addProduct.name,
              description: addProduct.description,
              price: addProduct.price,
              discount: addProduct.discount,
            })
          }
        />
        <br />
        <label for="name">Nome do Produto:</label>
        <input
          type="text"
          id="name"
          placeholder="Digite o nome do produto"
          onChange={(evt) =>
            setAddProduct({
              code: addProduct.code,
              name: evt.target.value,
              description: addProduct.description,
              price: addProduct.price,
              discount: addProduct.discount,
            })
          }
        />
        <br />
        <label for="description">Descrição do Produto:</label>
        <input
          type="text"
          id="description"
          placeholder="Insira detalhes sobre o produto"
          onChange={(evt) =>
            setAddProduct({
              code: addProduct.code,
              name: addProduct.name,
              description: evt.target.value,
              price: addProduct.price,
              discount: addProduct.discount,
            })
          }
        />
        <br />
        <label for="price">Preço do Produto:</label>
        <input
          type="text"
          id="price"
          placeholder="Digite o preço do produto"
          onChange={(evt) =>
            setAddProduct({
              code: addProduct.code,
              name: addProduct.name,
              description: addProduct.description,
              price: evt.target.value,
              discount: addProduct.discount,
            })
          }
        />
        <br />
        <label for="discount">Desconto do Produto:</label>
        <input
          type="text"
          id="discount"
          placeholder="Digite o desconto do produto"
          onChange={(evt) =>
            setAddProduct({
              code: addProduct.code,
              name: addProduct.name,
              description: addProduct.description,
              price: addProduct.price,
              discount: evt.target.value,
            })
          }
        />
        <br />
        <button onClick={() => setProducts([...products, addProduct])}>
          Cadastrar produto
        </button>
      </section>

      <hr />

      <div className="divProductsList">
        <h2>Produtos Cadastrados:</h2>
        <div>
          {products.map((item) => (
            <div className="product" key={item.code}>
              <h4>Produto: {item.name}</h4>
              <h5>Descrição do produto: {item.description}</h5>
              <p>Preço: {item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
