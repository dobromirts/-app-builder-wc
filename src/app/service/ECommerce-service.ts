export default class ECommerceService {
  public getSales = async (): Promise<any> => {
    const response = await fetch('https://excel2json.io/api/share/f9942c71-b172-4060-4381-08da496bf5f2');
    if (!response.ok) {
      return Promise.resolve(null);
    }
    return response.json();
  }

  public getRevenue = async (): Promise<any> => {
    const response = await fetch('https://excel2json.io/api/share/03e74dde-d2e1-4fee-437d-08da496bf5f2');
    if (!response.ok) {
      return Promise.resolve(null);
    }
    return response.json();
  }
}
