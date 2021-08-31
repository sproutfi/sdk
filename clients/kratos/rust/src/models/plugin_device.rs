/*
 * Ory Kratos API
 *
 * Documentation for all public and administrative Ory Kratos APIs. Public and administrative APIs are exposed on different ports. Public APIs can face the public internet without any protection while administrative APIs should never be exposed without prior authorization. To protect the administative API port you should use something like Nginx, Ory Oathkeeper, or any other technology capable of authorizing incoming requests. 
 *
 * The version of the OpenAPI document: v0.7.3-alpha.4
 * Contact: hi@ory.sh
 * Generated by: https://openapi-generator.tech
 */

/// PluginDevice : PluginDevice plugin device



#[derive(Clone, Debug, PartialEq, Serialize, Deserialize)]
pub struct PluginDevice {
    /// description
    #[serde(rename = "Description")]
    pub description: String,
    /// name
    #[serde(rename = "Name")]
    pub name: String,
    /// path
    #[serde(rename = "Path")]
    pub path: String,
    /// settable
    #[serde(rename = "Settable")]
    pub settable: Vec<String>,
}

impl PluginDevice {
    /// PluginDevice plugin device
    pub fn new(description: String, name: String, path: String, settable: Vec<String>) -> PluginDevice {
        PluginDevice {
            description,
            name,
            path,
            settable,
        }
    }
}


