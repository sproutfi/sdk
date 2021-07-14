/*
 * ORY Oathkeeper
 *
 * ORY Oathkeeper is a reverse proxy that checks the HTTP Authorization for validity against a set of rules. This service uses Hydra to validate access tokens and policies.
 *
 * The version of the OpenAPI document: v0.38.14-beta.1
 * Contact: hi@ory.am
 * Generated by: https://openapi-generator.tech
 */




#[derive(Clone, Debug, PartialEq, Serialize, Deserialize)]
pub struct Rule {
    /// Authenticators is a list of authentication handlers that will try and authenticate the provided credentials. Authenticators are checked iteratively from index 0 to n and if the first authenticator to return a positive result will be the one used.  If you want the rule to first check a specific authenticator  before \"falling back\" to others, have that authenticator as the first item in the array.
    #[serde(rename = "authenticators", skip_serializing_if = "Option::is_none")]
    pub authenticators: Option<Vec<crate::models::RuleHandler>>,
    #[serde(rename = "authorizer", skip_serializing_if = "Option::is_none")]
    pub authorizer: Option<Box<crate::models::RuleHandler>>,
    /// Description is a human readable description of this rule.
    #[serde(rename = "description", skip_serializing_if = "Option::is_none")]
    pub description: Option<String>,
    /// ID is the unique id of the rule. It can be at most 190 characters long, but the layout of the ID is up to you. You will need this ID later on to update or delete the rule.
    #[serde(rename = "id", skip_serializing_if = "Option::is_none")]
    pub id: Option<String>,
    #[serde(rename = "match", skip_serializing_if = "Option::is_none")]
    pub _match: Option<Box<crate::models::RuleMatch>>,
    /// Mutators is a list of mutation handlers that transform the HTTP request. A common use case is generating a new set of credentials (e.g. JWT) which then will be forwarded to the upstream server.  Mutations are performed iteratively from index 0 to n and should all succeed in order for the HTTP request to be forwarded.
    #[serde(rename = "mutators", skip_serializing_if = "Option::is_none")]
    pub mutators: Option<Vec<crate::models::RuleHandler>>,
    #[serde(rename = "upstream", skip_serializing_if = "Option::is_none")]
    pub upstream: Option<Box<crate::models::Upstream>>,
}

impl Rule {
    pub fn new() -> Rule {
        Rule {
            authenticators: None,
            authorizer: None,
            description: None,
            id: None,
            _match: None,
            mutators: None,
            upstream: None,
        }
    }
}


