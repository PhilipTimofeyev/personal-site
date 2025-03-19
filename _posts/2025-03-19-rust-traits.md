---
layout: post
author: Philip
---
Traits are an example of polymorphism in Rust. They allow different types to respond to the same method.


<pre>
    <code class="language-rust">
        fn main() {

            struct Dog {
                bark: String
            }

            struct Cat {
                meow: String
            }

            trait Speak {
                fn speak(&self);
            }

            impl Speak for Dog {
                fn speak(&self) {
                    println!("{}", self.bark)
                }
            }

            impl Speak for Cat {
                fn speak(&self) {
                    println!("{}", self.meow)
                }
            }

            let dog  = Dog {bark: String::from("Woof!")};
            let cat  = Cat {meow: String::from("Meow!")};

            dog.speak();
            cat.speak();
        }
    </code>
</pre>