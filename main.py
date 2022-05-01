from Crypto.PublicKey import ECC

key = ECC.generate(curve='P-256')
print(key)