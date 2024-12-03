document.addEventListener("DOMContentLoaded", () => {
    const preloadMenu = () => {
        const defaultMenu = [
            // Drinks
            {
                name: "Nitro Nitro Cold Brew",
                description: "Smooth cold brew, double nitro-charged for maximum speed",
                price: "$4.50",
                image: "https://i.pinimg.com/564x/69/55/2f/69552f003e42fb8874a83bf5e6c1b017.jpg",
                category: "coffee"
            },
            {
                name: "Pit Stop Espresso Shot",
                description: "A quick jolt of energy to keep you going.",
                price: "$2.25",
                image: "https://i.pinimg.com/564x/dd/0e/78/dd0e7878169954d00dace05d841265ad.jpg",
                category: "coffee"
            },
            {
                name: "Turbocharged Latte",
                description: "Steamed milk and espresso with options like vanilla, caramel, or mocha.",
                price: "$4.25",
                image: "https://i.pinimg.com/564x/38/4e/60/384e6075849ba6118d07f523a75814ca.jpg",
                category: "coffee"
            },
            {
                name: "Fast Lane Flat White",
                description: "Bold espresso and velvety milk for the serious coffee fan.",
                price: "$4.00",
                image: "https://i.pinimg.com/736x/99/0b/1c/990b1cf59523f595c5ec809a6f36a0de.jpg",
                category: "coffee"
            },
            {
                name: "Fuel-Up Cappuccino",
                description: "A balanced shot of espresso with a light foam",
                price: "$3.75",
                image: "https://i.pinimg.com/736x/41/d4/3c/41d43c81cb1650ffb9588773cc95d6c3.jpg",
                category: "coffee"
            },
            // Smoothies
            {
                name: "Peanut Butter Pit Stop",
                description: "Peanut butter, banana, and protein powder for a hearty boost",
                price: "$6.50",
                image: "https://i.pinimg.com/564x/55/3f/91/553f917f3a3a0d0ab15dde62fc1e5c90.jpg",
                category: "smoothies"
            },
            {
                name: "Mango Madness",
                description: "Mango, pineapple, and a hint of lime juice for a tropical kick",
                price: "$6.25",
                image: "https://i.pinimg.com/564x/4d/0b/3f/4d0b3f84db4d29b05f0daed18f34bc27.jpg",
                category: "smoothies"
            },
            {
                name: "Turbocharged Chocolate",
                description: "Almond milk, chocolate protein, and espresso for a protein-packed mocha",
                price: "$6.75",
                image: "https://i.pinimg.com/564x/43/67/26/43672651eb9ddcc90c55042355dd0d85.jpg",
                category: "smoothies"
            },
            // Refreshments
            {
                name: "Pit Crew Lemonade",
                description: "Fresh-squeezed lemonade served with a twist of mint.",
                price: "$3.50",
                image: "https://i.pinimg.com/564x/ff/02/5b/ff025bc01db3a954679604c06cd73b00.jpg",
                category: "refreshments"
            },
            {
                name: "Citrus Speed Tea",
                description: "Iced tea with lemon, orange, and a hint of ginger.",
                price: "$3.75",
                image: "https://i.pinimg.com/736x/14/0d/c3/140dc3afd1172ee53e12a17ce9d336ee.jpg",
                category: "refreshments"
            },
            {
                name: "Race Fuel Refresher",
                description: "Sparkling water with mixed berries, lime, and a splash of green tea.",
                price: "$4.00",
                image: "https://i.pinimg.com/564x/45/16/6f/45166fe3df774badc3b325c60fd50a9f.jpg",
                category: "refreshments"
            },
            //For The Road
            {
                name: "Jumpstart Hot Chocolate",
                description: "Rich and creamy, topped with whipped cream and chocolate shavings.",
                price: "$3.50",
                image: "https://i.pinimg.com/564x/03/57/6c/03576c292f7a23f711cd6f0c371a2f8d.jpg",
                category: "for-the-road"
            },
            {
                name: "Revved-Up Chai Latte",
                description: "Spicy chai with frothy milk and a dash of cinnamon.",
                price: "$4.00",
                image: "https://i.pinimg.com/564x/9c/1e/7b/9c1e7bcb9f175cacf388dc5e00e36b21.jpg",
                category: "for-the-road"
            },
            {
                name: "Speedy Matcha Latte",
                description: "Earthy matcha blended with steamed milk for steady energy.",
                price: "$4.25",
                image: "https://i.pinimg.com/564x/49/9c/b6/499cb6f91b95ccec11998a3144246886.jpg",
                category: "for-the-road"
            },
            // Pastries
            {
                name: "Turbo Turnovers",
                description: "Flaky turnovers filled with apple, cherry, or chocolate",
                price: "$2.75 each",
                image: "https://i.pinimg.com/564x/a3/1a/c1/a31ac17ad28ab1e3d3a0bb53b1d13891.jpg",
                category: "pit-stop-pastries"
            },
            {
                name: "Nitro Cinnamon Rolls",
                description: "Giant, gooey cinnamon rolls with extra icing.",
                price: "$3.50 each",
                image: "https://i.pinimg.com/736x/09/76/b6/0976b664268723a8d3167936295162ca.jpg",
                category: "pit-stop-pastries"
            },
            {
                name: "Pit Crew Croissants",
                description: "Classic, chocolate, or almond croissants, light and buttery.",
                price: "$2.25 (Classic), $2.75 (Chocolate or Almond)",
                image: "https://i.pinimg.com/564x/b1/57/c8/b157c844a0e000474b27f2432b95f243.jpg",
                category: "pit-stop-pastries"
            },
            {
                name: "Speedy Scones",
                description: "Choose from blueberry, cranberry-orange, or cheddar-chive.",
                price: "$2.50 each",
                image: "https://i.pinimg.com/564x/de/ec/49/deec499058757f9ee38c67c8074a1796.jpg",
                category: "pit-stop-pastries"
            },
            {
                name: "Drag Race Donuts",
                description: "Variety of classic, filled, and frosted donuts in the fast lane.",
                price: "$1.75 each, $9.50 for half dozen",
                image: "https://i.pinimg.com/564x/39/de/59/39de59254d0aa1ab16cb21a56712762e.jpg",
                category: "pit-stop-pastries"
            },
            //Breads
            {
                name: "Quick Pit Pita",
                description: "Soft pita bread with a choice of garlic, rosemary, or plain.",
                price: "$2.50 each",
                image: "https://i.pinimg.com/564x/3f/8d/5f/3f8d5f2b66ca7675d7a7ca69d3c3c63f.jpg",
                category: "fast-lane-breads"
            },
            {
                name: "Full Throttle Focaccia",
                description: "Olive oil focaccia topped with rosemary, olives, or sundried tomatoes.",
                price: "$4.00 per slice",
                image: "https://i.pinimg.com/564x/73/93/94/739394e684f07561a84ec983e0e03cf0.jpg",
                category: "fast-lane-breads"
            },
            {
                name: "Revved-Up Rye",
                description: "Fresh rye bread with a caraway kick.",
                price: "$5.00 per loaf",
                image: "https://i.pinimg.com/564x/5c/bd/62/5cbd62c3377e01e91c3ee9debd9a14ba.jpg",
                category: "fast-lane-breads"
            },
            {
                name: "Rapid-Fire Rolls",
                description: "Soft rolls in sourdough, whole wheat, or everything seasoning.",
                price: "$1.25 each, $6.00 for half dozen",
                image: "https://i.pinimg.com/564x/2b/33/54/2b3354c17fa9ecea377221984ef288ce.jpg",
                category: "fast-lane-breads"
            },
            {
                name: "Speed Loaf",
                description: "Mini loaves in flavors like jalapeño-cheddar, classic sourdough, or multigrain.",
                price: "$4.50 each",
                image: "https://i.pinimg.com/564x/7e/8e/fa/7e8efa293918c1a375f593d5fefff274.jpg",
                category: "fast-lane-breads"
            },
            // Sandwiches
            {
                name: "Raceway Reuben",
                description: "Hot corned beef, sauerkraut, Swiss, and Thousand Island dressing on rye",
                price: "$9.50",
                image: "https://i.pinimg.com/564x/fe/f5/fa/fef5fa2eadb3f5536b8b8152840b6f91.jpg",
                category: "high-gear-sandwhiches"
            },
            {
                name: "Turbo Turkey Club",
                description: "Turkey, bacon, lettuce, tomato, and mayo on fresh sourdough.",
                price: "$8.75",
                image: "https://i.pinimg.com/564x/a1/f3/b3/a1f3b31f6a4ee58643ad76dfb4f37ecc.jpg",
                category: "high-gear-sandwhiches"
            },
            {
                name: "Speedster BLT",
                description: "A classic BLT with crispy bacon on toasted white or whole grain.",
                price: "$7.50",
                image: "https://i.pinimg.com/564x/56/36/4f/56364f0525fa75ee0e94fb32171650ba.jpg",
                category: "high-gear-sandwhiches"
            },
            {
                name: "Chicken Pitstop Pesto",
                description: "Grilled chicken, pesto, and mozzarella on a toasted ciabatta.",
                price: "$8.75",
                image: "https://i.pinimg.com/564x/2b/8a/80/2b8a80fb695cb210f9dc6fd012c11b45.jpg",
                category: "high-gear-sandwhiches"
            },
            {
                name: "Pedal to the Mettle Panini",
                description: "Roast beef, cheddar, caramelized onions, and horseradish aioli on focaccia.",
                price: "$9.25",
                image: "https://i.pinimg.com/564x/59/86/a3/5986a34722a1fbd02af43f6dde68b957.jpg",
                category: "high-gear-sandwhiches"
            },
            //Breakfast
            {
                name: "Green Light Bagels",
                description: "Fresh bagels with choice of cream cheese flavors: plain, chive, or veggie",
                price: "$1.50 (bagel only), +$0.50 for cream cheese",
                image: "https://i.pinimg.com/736x/d1/19/5f/d1195f699515dabb60cd4a823ce22808.jpg",
                category: "quick-fix-breakfast"
            },
            {
                name: "Fast Break Egg Croissant",
                description: "Scrambled eggs, bacon, and cheese in a buttery croissant.",
                price: "$5.00",
                image: "https://i.pinimg.com/564x/5f/30/74/5f307488602d537ab403a9cb4ba8fd7e.jpg",
                category: "quick-fix-breakfast"
            },
            {
                name: "Supercharged Avocado Toast",
                description: "Mashed avocado on sourdough with chili flakes and lemon zest.",
                price: "$6.00",
                image: "https://i.pinimg.com/564x/49/d2/ff/49d2ff7ccbece2fc348ef4161961b561.jpg",
                category: "quick-fix-breakfast"
            },
            {
                name: "Rev It Up Breakfast Burrito",
                description: "Eggs, sausage, cheese, and salsa in a soft wrap.",
                price: "$6.50",
                image: "https://i.pinimg.com/564x/f0/c8/56/f0c856aec98bd58c5a4e9e45e9a88a3f.jpg",
                category: "quick-fix-breakfast"
            },
            {
                name: "Overdrive Oats",
                description: "Overnight oats with fruit, nuts, and a drizzle of honey.",
                price: "$4.75",
                image: "https://i.pinimg.com/564x/16/27/4d/16274dda116968701a84b81f0b419b95.jpg",
                category: "quick-fix-breakfast"
            }
        ];

        if (!localStorage.getItem("menuItems")) {
            localStorage.setItem("menuItems", JSON.stringify(defaultMenu));
            console.log("Default menu preloaded into localStorage.");
        }
    };

    const loadMenu = () => {
        return JSON.parse(localStorage.getItem("menuItems")) || [];
    };

    const renderMenu = (filter = "all") => {
        const menuContainer = document.querySelector(".menu-items-con");
        const menuItems = loadMenu();

        menuContainer.innerHTML = "";

        const filteredItems = filter === "all"
            ? menuItems
            : menuItems.filter((item) => item.category === filter);

        filteredItems.forEach((item) => {
            const menuItemHTML = `
                <div class="menu-items" data-category="${item.category}">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="menu-item-details">
                        <p class="item-name"><strong>${item.name}</strong></p>
                        <p>${item.description}</p>
                        <p class="price">${item.price}</p>
                    </div>
                </div>
            `;
            menuContainer.innerHTML += menuItemHTML;
        });
    };

    const setupFilterButtons = () => {
        const filterButtons = document.querySelectorAll(".filter-btn");

        filterButtons.forEach((button) => {
            button.addEventListener("click", () => {
                filterButtons.forEach((btn) => btn.classList.remove("active"));

                button.classList.add("active");

                const filter = button.getAttribute("data-filter");
                renderMenu(filter);
            });
        });
    };

    preloadMenu();
    renderMenu(); 
    setupFilterButtons();
});