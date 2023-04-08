export function paginate(array: any[], page_size: number) {
    const pages: any[][] = []
    for (let i = page_size; array.length + page_size > i; i += page_size) {
        pages.push(array.slice(i - page_size, i))
    }
    return pages
}
export function joinPages(current_array: any[], new_page: any[]) {
    const new_array = [...current_array, ...new_page]
    return new_array
}