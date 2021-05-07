/*
 * Ory Kratos API
 *
 * Documentation for all public and administrative Ory Kratos APIs. Public and administrative APIs are exposed on different ports. Public APIs can face the public internet without any protection while administrative APIs should never be exposed without prior authorization. To protect the administative API port you should use something like Nginx, Ory Oathkeeper, or any other technology capable of authorizing incoming requests. 
 *
 * API version: v0.6.0-alpha.2
 * Contact: hi@ory.sh
 */

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package client

import (
	"encoding/json"
)

// SubmitSelfServiceSettingsFlowWithProfileMethod nolint:deadcode,unused
type SubmitSelfServiceSettingsFlowWithProfileMethod struct {
	// The Anti-CSRF Token  This token is only required when performing browser flows.
	CsrfToken *string `json:"csrf_token,omitempty"`
	// Method  Should be set to profile when trying to update a profile.  type: string
	Method *string `json:"method,omitempty"`
	// Traits contains all of the identity's traits.
	Traits map[string]interface{} `json:"traits"`
}

// NewSubmitSelfServiceSettingsFlowWithProfileMethod instantiates a new SubmitSelfServiceSettingsFlowWithProfileMethod object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSubmitSelfServiceSettingsFlowWithProfileMethod(traits map[string]interface{}) *SubmitSelfServiceSettingsFlowWithProfileMethod {
	this := SubmitSelfServiceSettingsFlowWithProfileMethod{}
	this.Traits = traits
	return &this
}

// NewSubmitSelfServiceSettingsFlowWithProfileMethodWithDefaults instantiates a new SubmitSelfServiceSettingsFlowWithProfileMethod object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSubmitSelfServiceSettingsFlowWithProfileMethodWithDefaults() *SubmitSelfServiceSettingsFlowWithProfileMethod {
	this := SubmitSelfServiceSettingsFlowWithProfileMethod{}
	return &this
}

// GetCsrfToken returns the CsrfToken field value if set, zero value otherwise.
func (o *SubmitSelfServiceSettingsFlowWithProfileMethod) GetCsrfToken() string {
	if o == nil || o.CsrfToken == nil {
		var ret string
		return ret
	}
	return *o.CsrfToken
}

// GetCsrfTokenOk returns a tuple with the CsrfToken field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SubmitSelfServiceSettingsFlowWithProfileMethod) GetCsrfTokenOk() (*string, bool) {
	if o == nil || o.CsrfToken == nil {
		return nil, false
	}
	return o.CsrfToken, true
}

// HasCsrfToken returns a boolean if a field has been set.
func (o *SubmitSelfServiceSettingsFlowWithProfileMethod) HasCsrfToken() bool {
	if o != nil && o.CsrfToken != nil {
		return true
	}

	return false
}

// SetCsrfToken gets a reference to the given string and assigns it to the CsrfToken field.
func (o *SubmitSelfServiceSettingsFlowWithProfileMethod) SetCsrfToken(v string) {
	o.CsrfToken = &v
}

// GetMethod returns the Method field value if set, zero value otherwise.
func (o *SubmitSelfServiceSettingsFlowWithProfileMethod) GetMethod() string {
	if o == nil || o.Method == nil {
		var ret string
		return ret
	}
	return *o.Method
}

// GetMethodOk returns a tuple with the Method field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SubmitSelfServiceSettingsFlowWithProfileMethod) GetMethodOk() (*string, bool) {
	if o == nil || o.Method == nil {
		return nil, false
	}
	return o.Method, true
}

// HasMethod returns a boolean if a field has been set.
func (o *SubmitSelfServiceSettingsFlowWithProfileMethod) HasMethod() bool {
	if o != nil && o.Method != nil {
		return true
	}

	return false
}

// SetMethod gets a reference to the given string and assigns it to the Method field.
func (o *SubmitSelfServiceSettingsFlowWithProfileMethod) SetMethod(v string) {
	o.Method = &v
}

// GetTraits returns the Traits field value
func (o *SubmitSelfServiceSettingsFlowWithProfileMethod) GetTraits() map[string]interface{} {
	if o == nil {
		var ret map[string]interface{}
		return ret
	}

	return o.Traits
}

// GetTraitsOk returns a tuple with the Traits field value
// and a boolean to check if the value has been set.
func (o *SubmitSelfServiceSettingsFlowWithProfileMethod) GetTraitsOk() (map[string]interface{}, bool) {
	if o == nil  {
		return nil, false
	}
	return o.Traits, true
}

// SetTraits sets field value
func (o *SubmitSelfServiceSettingsFlowWithProfileMethod) SetTraits(v map[string]interface{}) {
	o.Traits = v
}

func (o SubmitSelfServiceSettingsFlowWithProfileMethod) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.CsrfToken != nil {
		toSerialize["csrf_token"] = o.CsrfToken
	}
	if o.Method != nil {
		toSerialize["method"] = o.Method
	}
	if true {
		toSerialize["traits"] = o.Traits
	}
	return json.Marshal(toSerialize)
}

type NullableSubmitSelfServiceSettingsFlowWithProfileMethod struct {
	value *SubmitSelfServiceSettingsFlowWithProfileMethod
	isSet bool
}

func (v NullableSubmitSelfServiceSettingsFlowWithProfileMethod) Get() *SubmitSelfServiceSettingsFlowWithProfileMethod {
	return v.value
}

func (v *NullableSubmitSelfServiceSettingsFlowWithProfileMethod) Set(val *SubmitSelfServiceSettingsFlowWithProfileMethod) {
	v.value = val
	v.isSet = true
}

func (v NullableSubmitSelfServiceSettingsFlowWithProfileMethod) IsSet() bool {
	return v.isSet
}

func (v *NullableSubmitSelfServiceSettingsFlowWithProfileMethod) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSubmitSelfServiceSettingsFlowWithProfileMethod(val *SubmitSelfServiceSettingsFlowWithProfileMethod) *NullableSubmitSelfServiceSettingsFlowWithProfileMethod {
	return &NullableSubmitSelfServiceSettingsFlowWithProfileMethod{value: val, isSet: true}
}

func (v NullableSubmitSelfServiceSettingsFlowWithProfileMethod) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSubmitSelfServiceSettingsFlowWithProfileMethod) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


