export default class PostService {
  static async getAll(limit:number = 10, page:number = 1) {
    return 1;
    // const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    //   params: { _limit: limit, _page: page },
    // });
    // return response;
  }

  static async getById(id:number) {
    return 1;
    // const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    // return response;
  }

  static async getPostComments(id:number) {
    return 1;
    // const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    // return response;
  }
}