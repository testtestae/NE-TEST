export const h = (tag, props, ...children) => {
    if (typeof tag === 'function') {
        return tag({ ...props }, children)
    }

    // Create the element and add attributes to it
    const el = document.createElement(tag)
    if (props) {
        Object.entries(props).forEach(([key, val]) => {
            if (key === 'className') {
                // el.classList.add(...(typeof val == 'string' || '').trim().split(' '));
                return
            }

            el.setAttribute(key, val)
        })
    }

    // Append all children to the element
    children.forEach((child) => {
        el.append(child)
    })

    return el
}

export const Fragment = () => {
    return null
}

// export function create(el, attrs, content) {
//     const node = document.createElement(el)

//     Object.entries(attrs || {}).forEach(([name, value]) =>{
//         node.setAttribute(name, value)
//     })

//     if (typeof content == 'string') {
//         content = document.createTextNode(content)
//     }

//     node.appendChild(content)

//     return node
// }
