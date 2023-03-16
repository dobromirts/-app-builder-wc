export default class InventoryAppService {
  public getNewProducts = async (): Promise<any> => {
    const response = await fetch('https://excel2json.io/api/share/4b54e7f8-927a-4a38-e690-08dab79fa5b4');
    if (!response.ok) {
      return Promise.resolve(null);
    }
    return response.json();
  }

  public getProducts = async (): Promise<any> => {
    const response = await fetch('https://excel2json.io/api/share/22b3aaa8-bba3-43cb-e68f-08dab79fa5b4');
    if (!response.ok) {
      return Promise.resolve(null);
    }
    return response.json();
  }
}
