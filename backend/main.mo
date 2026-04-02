import Map "mo:core/Map";
import List "mo:core/List";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import MixinStorage "blob-storage/Mixin";
import Storage "blob-storage/Storage";

actor {
  include MixinStorage();

  type Property = {
    id : Text;
    name : Text;
    location : Text;
    image : Storage.ExternalBlob;
    propertyType : Text;
    price : Nat; // in USD
    description : Text;
  };

  module Property {
    public func compare(property1 : Property, property2 : Property) : Order.Order {
      Text.compare(property1.id, property2.id);
    };
  };

  type Enquiry = {
    id : Text;
    name : Text;
    phoneNumber : Text;
    requirement : Text;
    timestamp : Int;
  };

  module Enquiry {
    public func compare(enquiry1 : Enquiry, enquiry2 : Enquiry) : Order.Order {
      Text.compare(enquiry1.id, enquiry2.id);
    };
  };

  let properties = Map.empty<Text, Property>();

  let enquiries = List.empty<Enquiry>();

  // Property Management
  public shared ({ caller }) func addProperty(
    id : Text,
    name : Text,
    location : Text,
    image : Storage.ExternalBlob,
    propertyType : Text,
    price : Nat,
    description : Text,
  ) : async () {
    let property : Property = {
      id;
      name;
      location;
      image;
      propertyType;
      price;
      description;
    };
    properties.add(id, property);
  };

  public query ({ caller }) func getProperty(id : Text) : async Property {
    switch (properties.get(id)) {
      case (null) { Runtime.trap("Property does not exist") };
      case (?property) { property };
    };
  };

  public query ({ caller }) func getAllProperties() : async [Property] {
    properties.values().toArray().sort();
  };

  public query ({ caller }) func searchProperties(searchTerm : Text) : async [Property] {
    let lowerSearchTerm = searchTerm.toLower() # "";
    let filtered = properties.values().toArray().filter(
      func(property) {
        property.name.toLower().contains(#text lowerSearchTerm) or
        property.location.toLower().contains(#text lowerSearchTerm) or
        property.propertyType.toLower().contains(#text lowerSearchTerm)
      }
    );
    filtered.sort();
  };

  public shared ({ caller }) func updateProperty(
    id : Text,
    name : Text,
    location : Text,
    image : Storage.ExternalBlob,
    propertyType : Text,
    price : Nat,
    description : Text,
  ) : async () {
    if (not properties.containsKey(id)) { Runtime.trap("Property does not exist") };
    let updatedProperty : Property = {
      id;
      name;
      location;
      image;
      propertyType;
      price;
      description;
    };
    properties.add(id, updatedProperty);
  };

  public shared ({ caller }) func removeProperty(id : Text) : async () {
    if (not properties.containsKey(id)) { Runtime.trap("Property does not exist") };
    properties.remove(id);
  };

  // Enquiry Management
  public shared ({ caller }) func submitEnquiry(
    id : Text,
    name : Text,
    phoneNumber : Text,
    requirement : Text,
    timestamp : Int,
  ) : async () {
    let enquiry : Enquiry = {
      id;
      name;
      phoneNumber;
      requirement;
      timestamp;
    };
    enquiries.add(enquiry);
  };

  public query ({ caller }) func getAllEnquiries() : async [Enquiry] {
    enquiries.toArray().sort();
  };

  public query ({ caller }) func getEnquiryCount() : async Nat {
    enquiries.size();
  };
};
