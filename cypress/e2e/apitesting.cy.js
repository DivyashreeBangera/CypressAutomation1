describe('API Automation Testing with Cypress', () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
  
    // Test: GET Request
    it('GET - Retrieve a post by ID', () => {
      cy.request(`${baseUrl}/posts/1`).then((response) => {
        expect(response.status).to.eq(200); // Assert status code
        expect(response.body).to.have.property('id', 1); // Assert specific property
        expect(response.body).to.have.property('title'); // Assert existence of title
      });
    });
  
    // Test: POST Request
    it('POST - Create a new post', () => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}/posts`,
        body: {
          title: 'foo',
          body: 'bar',
          userId: 1,
        },
      }).then((response) => {
        expect(response.status).to.eq(201); // Assert creation success
        expect(response.body).to.have.property('id'); // Assert response contains new ID
        expect(response.body).to.have.property('title', 'foo'); // Assert title is correct
      });
    });
  
    // Test: PUT Request
    it('PUT - Update a post', () => {
      cy.request({
        method: 'PUT',
        url: `${baseUrl}/posts/1`,
        body: {
          id: 1,
          title: 'updated title',
          body: 'updated body',
          userId: 1,
        },
      }).then((response) => {
        expect(response.status).to.eq(200); // Assert update success
        expect(response.body).to.have.property('title', 'updated title'); // Assert title is updated
      });
    });
  
    // Test: DELETE Request
    it('DELETE - Remove a post', () => {
      cy.request({
        method: 'DELETE',
        url: `${baseUrl}/posts/1`,
      }).then((response) => {
        expect(response.status).to.eq(200); // Assert deletion success
      });
    });
  
    // Test: Validating Response Headers
    it('GET - Validate response headers', () => {
      cy.request(`${baseUrl}/posts/1`).then((response) => {
        expect(response.headers).to.have.property('content-type');
        expect(response.headers['content-type']).to.include('application/json');
      });
    });
  
    // Test: Handling Query Parameters
    it('GET - Retrieve posts with query parameters', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/posts`,
        qs: { userId: 1 }, // Pass query parameters
      }).then((response) => {
        expect(response.status).to.eq(200);
        response.body.forEach((post) => {
          expect(post.userId).to.eq(1); // Assert all posts belong to userId 1
        });
      });
    });
  });