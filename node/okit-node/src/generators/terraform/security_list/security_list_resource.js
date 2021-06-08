/*
** Copyright (c) 2020, 2021, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

/*
** Author: Andrew Hopkinson
*/

/*
** ======================================================================
** === Auto Generated Code All Edits Will Be Lost During Regeneration ===
** ======================================================================
**
** Generated : 25/05/2021 16:44:54
**
*/

import { OkitResourceTerraform } from '../okit_resource_terraform.js'

class SecurityListResource extends OkitResourceTerraform {
    static model = {
        type: {
                required: false,
                editable: true,
                type: 'datalist',
                label: 'Type'
            },
        subtype: {
                required: false,
                editable: true,
                type: 'datalist',
                label: 'Subtype'
            },
        attributes: {
                required: false,
                editable: true,
                type: 'datalist',
                label: 'Attributes'
            },
    }

    constructor(resource) {
        super(resource)
        this.tf_resource_name = 'oci_core_security_list'
        this.resource_list = 'security_list'
    }

    toResource() {
        let cmd = []
        cmd.push('resource "oci_core_security_list" "${this.resource_name}" {')
        cmd.push('    #Required')
        cmd.push(`    compartment_id = ${this.varValOrRef('compartment_id', this.resource.compartment_id)}`)
        cmd.push(`    vcn_id = ${this.varValOrRef('vcn_id', this.resource.vcn_id)}`)
        cmd.push('    #Optional')

        if (this.resource.display_name && this.resource.display_name !== '') cmd.push(`    display_name = ${this.varValOrRef('display_name', this.resource.display_name)}`)

        if (this.resource.egress_security_rules && this.resource.egress_security_rules !== '') cmd.push(`    egress_security_rules = ${this.varValOrRef('egress_security_rules', this.resource.egress_security_rules)}`)
        if (this.resource.ingress_security_rules && this.resource.ingress_security_rules !== '') cmd.push(`    ingress_security_rules = ${this.varValOrRef('ingress_security_rules', this.resource.ingress_security_rules)}`)
        cmd.push('    #Tags')
        cmd.push('}')
        return cmd.join('\n')
    }

    toData() {
        let cmd = []
        cmd.push('data "oci_core_security_list" "${this.resource_name}" {')
        cmd.push('    #Required')
        cmd.push('    security_list_id = ${this.resource_id}')
        cmd.push('}')
        return cmd.join('\n')
   }

}

export default SecurityListResource
export { SecurityListResource }