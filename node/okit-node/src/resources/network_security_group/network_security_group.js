/*
** Copyright (c) 2020, 2021, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

/*
** Author: Andrew Hopkinson
*/

/*
** Author: Andrew Hopkinson
*/

import { OkitResource } from '../okit_resource.js'

class NetworkSecurityGroup extends OkitResource {
    static get def() {return `
    <g>
        <path fill="#ff6600" d="M127,83V40.3l-46-19.7l-46,19.8l0.2,45.1l0.1,0.4c6.8,39.5,42.6,54.1,44.1,54.7l1.9,0.8l1.8-0.9
            C126.9,117.9,127,84.4,127,83z M118,83.1c0,1.2-0.3,28.6-37.1,48.3c-6.9-3.4-31.5-17.3-36.7-46.7l-0.1-38.4l37-15.9l37,15.9V83.1z"/>
        <polygon fill="#ff6600" points="99.5,69.6 95.1,74 90.7,69.6 87.7,72.7 92.1,77.1 87.7,81.4 90.7,84.5 95.1,80.1 99.5,84.5 
            102.6,81.4 98.2,77.1 102.6,72.7 	"/>
        <polygon fill="#ff6600" points="104.1,52.9 101.1,49.8 92.6,58 89.5,54.3 86.2,57.1 92.3,64.3 	"/>
        <polygon fill="#ff6600" points="104.1,92 101.1,88.9 92.6,97.1 89.5,93.4 86.2,96.2 92.3,103.4 	"/>
        <rect x="57.8" y="74.5" fill="#ff6600" width="21.2" height="6.6"/>
        <rect x="57.8" y="94.1" fill="#ff6600" width="21.2" height="6.6"/>
        <rect x="57.8" y="54.9" fill="#ff6600" width="21.2" height="6.6"/>
    </g>
   `}
    
    // Function Getters
    get parent_id() {return this.view.all_resources.find(resource => resource.id === this.vcn_id && resource.compartment_id === this.compartment_id) ? this.vcn_id : this.compartment_id}
}

export default NetworkSecurityGroup
export { NetworkSecurityGroup }
