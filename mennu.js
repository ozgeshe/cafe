

fetch('https://script.google.com/macros/s/AKfycbwkuaJMpIMQzRICIfMoGMZt59TkUb01gMIZgWI3hDJyVdrr-hXqJznVDHZlu7zVB9Fa4A/exec')
  .then(res => res.json())
  .then(data => {
    const menuContainer = document.getElementById('menu');
    let row;

    let index = 0;
    for (let category in data) {
      if (index % 2 === 0) {
        row = document.createElement('div');
        row.style.display = 'flex';
        row.style.gap = '40px';
        row.style.marginBottom = '40px';
        row.style.justifyContent = 'center';
        row.style.flexWrap = 'wrap';
        menuContainer.appendChild(row);
      }

      const section = document.createElement('div');
      section.className = 'category';

      const title = document.createElement('div');
      title.className = 'title';
      title.textContent = category.charAt(0).toUpperCase() + category.slice(1);
      section.appendChild(title);

      data[category].forEach(item => {
        const dish = document.createElement('div');
        dish.className = 'dish';
        dish.innerHTML = `<span>${item.name}</span><span>${item.price}</span>`;
        section.appendChild(dish);
      });

      row.appendChild(section);
      index++;
    }
  });



    const sheetUrl = 'https://script.google.com/macros/s/AKfycbwxmnLdQexhTRCTVcHWz_VQyjFVjNWoMi735L8TLmtT9GIXG4wRKlhCYZUrE6cyjo_ywg/exec';

    fetch(sheetUrl)
      .then(response => response.json())
      .then(data => {
        const menu = document.getElementById("menu1");
        Object.values(data).flat().forEach(bowl => {
          const div = document.createElement("div");
          div.className = "bowl";
          div.innerHTML = `
            <img src="${bowl.image}" alt="${bowl.name}" />
            <div class="price">${bowl.price}</div>
            <p>${bowl.name}</p>
          `;
          menu.appendChild(div);
        });
      })
      .catch(error => {
        console.error('Қате:', error);
        document.getElementById("menu1").innerText = "Мәзір жүктелмеді...";
      });








 const sheetUrl1 = 'https://script.google.com/macros/s/AKfycbyyLHgSA0q2vWWw8BN0p3gxcbfndASnVS7aCJXuMj0kUuGXoC41RkCO0n3IwIjViQBZ/exec'; // Осы жерге өз сілтемеңді қой

    fetch(sheetUrl1)
      .then(res => res.json())
      .then(data => {
        const menu = document.getElementById("menu2");

        Object.entries(data).forEach(([category, items]) => {
          const section = document.createElement("div");
          section.className = "category2";

          const title = document.createElement("div");
          title.className = "category-title";
          title.innerText = category.toUpperCase();
          section.appendChild(title);

          const itemsContainer = document.createElement("div");
          itemsContainer.className = "items";

          items.forEach(item => {
            const div = document.createElement("div");
            div.className = "item";
            div.innerHTML = `
              <img src="${item.image}" alt="${item.name}">
              <div class="price2">${item.price}</div>
              <div class="item-name">${item.name}</div>
            `;
            itemsContainer.appendChild(div);
          });

          section.appendChild(itemsContainer);
          menu.appendChild(section);
        });
      });