function Phone(brand, price, color, year) {
  this.brand = brand;
  this.price = price;
  this.color = color;
  this.year = year;
}

Phone.prototype.printInfo = function () {
  console.log("The phone brand is: " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
};

Phone.prototype.calculateAge = function () {
  console.log(this.brand + " is " + (2018 - this.year) + " years old.");
};

var samsungGalaxyS6 = new Phone ("Samsung", 2400, "black", 2015);

var iphone6S = new Phone ("Apple", 2250, "silver", 2016);

var onePluseOne = new Phone ("OnePlus", 1950, "red", 2014);

samsungGalaxyS6.printInfo();
iphone6S.printInfo();
onePluseOne.printInfo();

samsungGalaxyS6.calculateAge();
iphone6S.calculateAge();
onePluseOne.calculateAge();
