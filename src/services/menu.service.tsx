export const getMenuList = async (): Promise<any> =>{
    const response = await fetch('/data/options_data.json')
    return response.json()
}