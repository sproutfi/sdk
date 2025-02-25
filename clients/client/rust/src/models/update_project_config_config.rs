/*
 * Ory APIs
 *
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v0.0.1-alpha.71
 * Contact: support@ory.sh
 * Generated by: https://openapi-generator.tech
 */




#[derive(Clone, Debug, PartialEq, Serialize, Deserialize)]
pub struct UpdateProjectConfigConfig {
    /// The Ory Kratos config to import
    #[serde(rename = "identity")]
    pub identity: serde_json::Value,
}

impl UpdateProjectConfigConfig {
    pub fn new(identity: serde_json::Value) -> UpdateProjectConfigConfig {
        UpdateProjectConfigConfig {
            identity,
        }
    }
}


