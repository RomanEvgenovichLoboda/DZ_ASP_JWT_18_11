function Show() {
    let container = $('.cont').addClass('w-100 ');
    container.children().remove();
    $.get("/api/myproduct/getall")
        .done((data) => {
            for (const iterator of data) {
                //let product = $("<div></div>").addclass('card shadow').css('margin', '1rem').css('width', '18rem').css('height', '31rem');
                //let pr = $("<div></div>").addClass('card p-3 m-4 text-primary').css('width', '10rem');//.css('height', '10rem');
                //pr.text(`id - ${iterator['productId']}\n name - ${iterator['productName']}\n price - ${iterator['productCost']}`);
                let id = $("<p></p>").text(`id - ${iterator['productId']}`);
                let name = $("<p></p>").text(`name - ${iterator['productName']}`);
                let description = $("<p></p>").text(`Description - ${iterator['productDescription']}`);
                let price = $("<p></p>").text(`Price - ${iterator['productCost']}`);
                let stock = $("<p></p>").text(`Description - ${iterator['productStock']}`);
                let pr = $("<div></div>").addClass('card p-3 m-4 text-primary').append(id).append(name).append(description).append(price).append(stock);
                container.append(pr);

            }
        }
        );
};
document.addEventListener('DOMContentLoaded', () => { 
    Show();
   






   
      
});