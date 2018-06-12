function Phone(brand,price,color, rok){
this.brand=brand;
this.price=price;
this.color=color;
this.rok=rok;
}

Phone.prototype.printInfo = function(){
console.log("Marka telefonu: " + this.brand + ", kolor " + this.color + "cena " + this.price);
};

Phone.prototype.obliczRok= function(){
console.log(this.brand + " ma " + (2018- this.year) + " lat");

var samsungGalaxyS6 = new Phone ("Samsung", 2400, "black", 2015);

var iphone6S = new Phone ("Apple", 2250, "silver", 2016);

var onePluseOne = new Phone ("OnePlus", 1950, "red", 2014);

samsungGalaxyS6.printInfo();
iphone6S.printInfo();
onePluseOne.printInfo();
