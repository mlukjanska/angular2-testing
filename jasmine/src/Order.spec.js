describe('Order', function() {
  var order, customer;

  beforeEach(function() {
    customer = new Customer();
    order = new Order(customer);
  });

  describe('addItem(name, cost)', function() {
    it('should not discount unpreferred customers', function() {
        spyOn(customer, 'isPreferred'); 
        customer.isPreferred.and.returnValue(false);
        
        order.addItem('NonDiscountCustomer', 10);
        order.getTotal();
        expect(order.getTotal()).toEqual(10);

    });

    it('should give preferred customers a 10% discount', function() {
        spyOn(customer, 'isPreferred'); 
        customer.isPreferred.and.returnValue(true);
        
        order.addItem('NonDiscountCustomer', 10);
        order.getTotal();
        expect(order.getTotal()).toEqual(9);

    });
  });
});
