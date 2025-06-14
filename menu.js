  let allData = []; 
  let currentFilter = "all";

  async function fetchData() {
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwMDPyzsNktaT3U4v6n81kDZb-IF8vOyrbzpWRj88BGFudrQ-ZZKjMCa_CPa5fAOWQN/exec");

      if (!response.ok) {
        throw new Error("Network error");
      }

      const data = await response.json();
      allData = data; 
      renderCards();  

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function renderCards() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();
    const cardGrid = document.getElementById("cardGrid");
    cardGrid.innerHTML = "";

    allData.forEach(item => {
      const matchesFilter = currentFilter === "all" || item.category.toLowerCase() === currentFilter;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery);

      if (matchesFilter && matchesSearch) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-category", item.category.toLowerCase());

        card.innerHTML = `
          <img src="${item.image}" alt="${item.title}" />
          <h3>${item.title}</h3>
          <div class="price">${item.price} KZT</div>
        `;
        cardGrid.appendChild(card);
      }
    });
  }

  
  document.getElementById("searchInput").addEventListener("input", () => {
    renderCards();
  });


  document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      currentFilter = button.getAttribute("data-filter");
      renderCards(); 
    });
  });


  fetchData();
  function renderCards() {
  const searchQuery = document.getElementById("searchInput").value.toLowerCase();
  const cardGrid = document.getElementById("cardGrid");
  cardGrid.innerHTML = "";

  allData.forEach(item => {
    const matchesFilter = currentFilter === "all" || item.category.toLowerCase() === currentFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery);

    if (matchesFilter && matchesSearch) {
      const card = document.createElement("div");
      card.classList.add("card");
      card.setAttribute("data-category", item.category.toLowerCase());

      card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" />
        <h3>${item.title}</h3>
        <div class="price">${item.price} KZT</div>
        <button class="order-btn">Заказать</button>
      `;
      cardGrid.appendChild(card);
    }
  });
}

function renderCards() {
  const searchQuery = document.getElementById("searchInput").value.toLowerCase();
  const cardGrid = document.getElementById("cardGrid");
  cardGrid.innerHTML = "";

  allData.forEach(item => {
    const matchesFilter = currentFilter === "all" || item.category.toLowerCase() === currentFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery);

    if (matchesFilter && matchesSearch) {
      const card = document.createElement("div");
      card.classList.add("card");
      card.setAttribute("data-category", item.category.toLowerCase());

      // WhatsApp сілтемесі — өнім атауы URL арқылы кодталған
      const encodedTitle = encodeURIComponent(`Мен осы өнімге тапсырыс бергім келеді: ${item.title}`);
      const whatsappLink = `https://wa.me/77000203366?text=${encodedTitle}`;

      card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" />
        <h3>${item.title}</h3>
        <div class="price">${item.price} KZT</div>
        <a class="order-btn" href="${whatsappLink}" target="_blank">Заказать</a>
      `;
      cardGrid.appendChild(card);
    }
  });
}
