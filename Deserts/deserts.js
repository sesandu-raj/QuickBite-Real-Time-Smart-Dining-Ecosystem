        // --- State Management ---
        let total = 0;
        let cartItemCount = 0;

        // --- Selectors ---
        const cards = document.querySelectorAll('.card');
        const totalPriceEl = document.getElementById('totalPrice');
        const badgeEl = document.getElementById('cartCountBadge');
        const searchInput = document.getElementById('searchInput');
        const filterPills = document.querySelectorAll('.pill');

        // --- Core Functions ---
        function updateOrderTotal() {
            totalPriceEl.innerText = total.toFixed(2);
            badgeEl.innerText = cartItemCount;
        }

        // --- Card Event Listeners ---
        cards.forEach(card => {
            const plusBtn = card.querySelector('.plus');
            const minusBtn = card.querySelector('.minus');
            const qtyVal = card.querySelector('.qty-val');
            const addBtn = card.querySelector('.add-btn');
            const price = parseFloat(card.getAttribute('data-price'));

            plusBtn.addEventListener('click', () => {
                let currentQty = parseInt(qtyVal.innerText);
                qtyVal.innerText = currentQty + 1;
            });

            minusBtn.addEventListener('click', () => {
                let currentQty = parseInt(qtyVal.innerText);
                if (currentQty > 0) {
                    qtyVal.innerText = currentQty - 1;
                }
            });

            addBtn.addEventListener('click', () => {
                const qty = parseInt(qtyVal.innerText);
                if (qty > 0) {
                    // Update global state
                    total += (price * qty);
                    cartItemCount += qty;
                    updateOrderTotal();
                    
                    // Visual feedback
                    addBtn.classList.add('active');
                    setTimeout(() => addBtn.classList.remove('active'), 300);
                    
                    // Reset local qty after adding
                    qtyVal.innerText = 0;
                } else {
                    alert("Please select a quantity first!");
                }
            });
        });

        // --- Search Logic ---
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            cards.forEach(card => {
                const name = card.getAttribute('data-name');
                card.style.display = name.includes(term) ? 'flex' : 'none';
            });
        });

        // --- Category Filter Logic ---
        filterPills.forEach(pill => {
            pill.addEventListener('click', () => {
                // Remove active class from others
                filterPills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');

                const category = pill.getAttribute('data-category');
                
                cards.forEach(card => {
                    if (category === 'all' || card.getAttribute('data-category') === category) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    